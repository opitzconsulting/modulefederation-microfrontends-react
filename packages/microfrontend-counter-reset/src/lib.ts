/**
 * Die Anwendung erstellt 2 Bundles - ein "Haupt-Bundle", welches die tatsächliche Anwendung beinhaltet, und ein
 * Library-Bundle, welches die föderierten Komponenten beinhaltet. 
 * 
 * Das Lib-Bundle wird **nur für die Lokale Entwicklung** verwendet.
 * In diesem Beispiel-Repo sind wir in einem Lerna-Monorepo, 
 * in der Praxis könnten die jeweiligen Microfrontends, bzw. das Haupt-Repo
 * über npm geladen werden.
 * 
 * Wichtig bei diesem Modul ist, dass es dasselbe "interface" hat wie die in der vite.config.ts definierten
 * exposes-Einträge
 */
