name: Converter Relatório MT5
on:
  push:
    paths:
      - 'src/data/relatorios/raw/*.html'
  workflow_dispatch:
jobs:
  converter:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Converter HTMLs para JSON
        run: |
          echo "=== Arquivos em raw/ ==="
          ls -la src/data/relatorios/raw/ || echo "Pasta nao existe"
          shopt -s nullglob
          htmls=(src/data/relatorios/raw/*.html)
          echo "=== HTMLs encontrados: ${#htmls[@]} ==="
          if [ ${#htmls[@]} -eq 0 ]; then
            echo "Nenhum HTML encontrado em src/data/relatorios/raw/"
            exit 0
          fi
          for f in "${htmls[@]}"; do
            echo "=== Processando: $f ==="
            python3 -u scripts/convert_relatorio.py "$f" src/data/relatorios/json
            echo "=== Python finalizado ==="
          done
          echo "=== Listando json/ ==="
          ls -la src/data/relatorios/json/
      - name: Commit JSONs gerados
        run: |
          git config user.name "Viking Bot"
          git config user.email "bot@viking-investimentos.com"
          git add src/data/relatorios/json/ || true
          git diff --staged --quiet || git commit -m "Auto: converte relatorio MT5 para JSON"
          git push || true
