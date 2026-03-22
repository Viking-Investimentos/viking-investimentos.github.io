import re
import json
import sys
import os
from pathlib import Path


def converter(html_path: str, output_dir: str):
    with open(html_path, 'rb') as f:
        raw = f.read()
    try:
        content = raw.decode('utf-16-le', errors='ignore')
    except Exception:
        content = raw.decode('utf-8', errors='ignore')

    print(f"[DEBUG] Tamanho do conteudo: {len(content)} chars")
    print(f"[DEBUG] Primeiros 500 chars: {content[:500]}")

    pattern = r'<tr bgcolor="[^"]+" align="right"><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>[^<]+</td><td>[^<]+</td><td>[^<]+</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]*)</td></tr>'
    rows = re.findall(pattern, content)
    print(f"[DEBUG] Linhas encontradas pelo regex: {len(rows)}")

    if len(rows) == 0:
        sample = re.findall(r'<tr bgcolor[^>]*>.*?</tr>', content[:5000])
        print(f"[DEBUG] Amostra de <tr bgcolor>: {sample[:2]}")

    ops = []
    for r in rows:
        data, num, ativo, tipo, direcao, lote, preco, resultado, saldo, sinal = r
        resultado = resultado.strip().replace('\xa0', '').replace(' ', '')
        saldo = saldo.strip().replace('\xa0', '').replace(' ', '')
        ops.append({
            'data': data.strip(),
            'num': num.strip(),
            'tipo': tipo.strip(),
            'direcao': direcao.strip(),
            'preco': preco.strip(),
            'resultado': resultado,
            'saldo': saldo
        })

    entradas = [o for o in ops if o['direcao'] == 'in']
    saidas = [o for o in ops if o['direcao'] == 'out']
    pares = []
    for i in range(min(len(entradas), len(saidas))):
        e = entradas[i]
        s = saidas[i]
        res = float(s['resultado']) if s['resultado'] not in ['', '0.00'] else 0.0
        sal = float(s['saldo'].replace(',', '.'))
        pares.append({
            'n': i + 1,
            'ab': e['data'][5:16],
            'fc': s['data'][5:16],
            'lado': e['tipo'],
            'pe': float(e['preco']),
            'ps': float(s['preco']),
            'res': round(res, 2),
            'saldo': sal
        })

    wins = len([p for p in pares if p['res'] > 0])
    losses = len([p for p in pares if p['res'] < 0])
    lucro = round(sum(p['res'] for p in pares), 2)
    saldo_final = pares[-1]['saldo'] if pares else 10000.0
    nome_html = Path(html_path).stem
    output_path = os.path.join(output_dir, f'{nome_html}.json')

    win_rate = round((wins / len(pares)) * 100, 1) if pares else 0

    resultado_final = {
        'ativo': 'BTC/USD',
        'periodo': nome_html.replace('_', ' '),
        'deposito': 10000.0,
        'lucro': lucro,
        'retorno': round((lucro / 10000) * 100, 2),
        'operacoes': len(pares),
        'wins': wins,
        'losses': losses,
        'win_r
