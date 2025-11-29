# Shopping List 🛒

Prosta i intuicyjna aplikacja do zarządzania listą zakupów, stworzona w technologii **React** z wykorzystaniem **TypeScript** i **useState** do zarządzania stanem. Aplikacja pozwala na dodawanie, usuwanie i filtrowanie produktów według kategorii.

## Główne Funkcjonalności ✨

* **Dodawanie produktów:** Łatwo dodawaj nowe produkty do listy, podając ich nazwę, ilość (opcjonalnie) oraz wybierając kategorię.
* **Usuwanie produktów:** Usuwaj produkty z listy jednym kliknięciem.
* **Filtrowanie:** Filtruj listę zakupów według kategorii (**Warzywa**, **Owoce**, **Ser**, **Wędliny**, **Inne**).
* **Zarządzanie stanem:** Wykorzystanie hooka `useState` do efektywnego zarządzania stanem aplikacji.
* **Bezpieczeństwo typów:** Użycie **TypeScript** dla zwiększenia niezawodności i czytelności kodu.
* **Unikalne ID:** Użycie biblioteki `uuid` do generowania unikalnych identyfikatorów dla każdego produktu.



---

## Technologia 🛠️

Projekt został zbudowany przy użyciu następujących technologii:

* **React** (z hookami)
* **TypeScript**
* **HTML/CSS** (dla stylizacji)
* **`uuid`** (do generowania unikalnych ID)

---

## Struktura Komponentów 📂

Aplikacja jest podzielona na logiczne komponenty, z których każdy odpowiada za określoną część interfejsu i logiki:

* **`App`**: Główny komponent zarządzający stanem listy zakupów (`groceryList`) i aktualnie wybraną kategorią (`currentCategory`).
* **`FilterItems`**: Komponent zawierający rozwijaną listę do filtrowania produktów według kategorii.
* **`ListBox`**: Komponent wyświetlający przefiltrowaną listę produktów i obsługujący logikę filtrowania.
* **`FormAddThing`**: Komponent formularza do dodawania nowych produktów do listy.

---

## Jak uruchomić projekt? 🚀

Aby uruchomić aplikację lokalnie, wykonaj następujące kroki:

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [LINK_DO_TWOJEGO_REPOZYTORIUM]
    cd [NAZWA_PROJEKTU]
    ```

2.  **Zainstaluj zależności:**
    ```bash
    npm install
    # lub yarn install
    ```

3.  **Uruchom aplikację:**
    ```bash
    npm start
    # lub yarn start
    ```
    Aplikacja będzie dostępna pod adresem **http://localhost:3000** (lub innym, wskazanym przez terminal).

Możesz też uruchomić aplikację pod tym linkiem: https://listazakupow-wine.vercel.app/

---

## Użycie w praktyce 💡

1.  **Dodawanie:** Wpisz nazwę i ilość produktu w formularzu, wybierz kategorię i kliknij przycisk "Dodaj".
2.  **Usuwanie:** Kliknij symbol **✕** obok produktu, aby go usunąć.
3.  **Filtrowanie:** Użyj rozwijanej listy u góry, aby wyświetlić produkty tylko z wybranej kategorii (np. "Owoce").