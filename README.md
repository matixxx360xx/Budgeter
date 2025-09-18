# Budgeter – prosty menedżer budżetu w Node.js

Budgeter to prosty program konsolowy napisany w Node.js, który pomaga zarządzać miesięcznym budżetem.  
Pozwala ustawić dochód, dodawać wydatki na różne kategorie oraz wyświetlać saldo. Dodatkowo generuje podsumowanie wydatków w pliku PDF.

---

## Funkcjonalności

- Ustawianie miesięcznego dochodu
- Dodawanie wydatków w kategoriach: jedzenie, transport, rozrywka
- Wyświetlanie podsumowania wydatków i salda
- Zapis i odczyt danych do pliku JSON (`budzet.json`)
- Generowanie podsumowania w formacie PDF (`data.pdf`)

---

## Wymagania

- Node.js (wersja 14 lub wyższa)
- Moduły npm: `prompt-sync`, `jspdf`

---

## Instalacja

1. Sklonuj repozytorium lub pobierz pliki  
   ```bash
   git clone https://github.com/twoj-login/budgeter.git
   cd budgeter
   npm install prompt-sync jspdf
   node index.js

## Jak korzystać

- Po uruchomieniu wpisz swój miesięczny dochód (w PLN),
- W menu wybierz odpowiednią opcję, aby dodać wydatki lub wyświetlić saldo,
- Opcja generowania PDF zapisze plik `data.pdf` z podsumowaniem wydatków,
- Aby zakończyć program, wybierz odpowiednią opcję w menu.
