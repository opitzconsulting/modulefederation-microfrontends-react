Dies ist das "Haupt"-Frontend.
Siehe [microfrontend README](../microfrontend-counter-reset/README.md) für das Microfrontend.

In der `vite.config.ts` wird das `@originjs/vite-plugin-federation` Plugin konfiguriert. Es ist für das Einbinden der Microfrontends zuständig.

Im `remotes`-Record werden Namen (`frontendComponentReset`) einer Entry-Datei zugeordnet. Danach kann es über folgenden Import eingebunden werden:
```ts
// @ts-ignore
import ResetCounter from "frontendComponentReset/ResetCounter"
```
Wie im Code-Block zu sehen ist, kann Typescript mit diesem Import wenig anfangen. Der Import wird nicht erkannt, und es gibt auch somit keine Typ-Informationen über das Microfrontend.