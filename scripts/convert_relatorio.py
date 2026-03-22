import re
import json
import sys
import os
from pathlib import Path


def converter(html_path, output_dir):
    with open(html_path, 'rb') as f:
        raw = f.read()
    try:
        content = raw.decode('utf-16-le', errors='ignore')
    except Exception:
        content = raw.decode('utf-8', errors='ignore')

    print("[DEBUG] Tamanho: " + str(len(content)) + " chars")
    print("[DEBUG] Inicio: " + content[:300])

    pattern = r'<tr bgcolor="[^"]+" align="right"><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]+)</td><td>[^<]+</td><td>[^<]+</td><td>[^<]+</td><td>([^<]+)</td><td>([^<]+)</td><td>([^<]*)</td></tr>'
    rows = re.findall(pattern, content)
    print("[DEBUG] Linhas encontradas: " + str(len(rows)))

    if len(rows) == 0:
        sample = re.findall(r'<tr bgcolor[^>]*>.*?</tr>', content[:5000])
        print("[DEBUG] Amostra tr bgcolor: " + str(sample[:2]))

    ops = []
    for r in rows:
        data, num, ativo, tipo, direcao, lote, preco, resultado, saldo, sinal = r
        resultado
