Dies ist das Micro-Frontend.
Siehe [microfrontend README](../main/README.md) für das Haupt-Frontend.

Das hier definierte Frontend wird im Haupt-Frontend eingebunden. 
In der `vite.config.ts` sind die nötigen Konfigurationen des `@originjs/vite-plugin-federation` Plugins dafür vorgenommen.

Wichtig dabei ist es, einen `filename` anzugeben, welcher sich mit dem Pfad des `remotes` Eintrags im Haupt-Frontend deckt.
Auch müssen alle Komponenten, welche direkt aufgerufen werden sollen, in dem `exposes` Record aufgelistet sein. Als Key wird der "öffentlich" Pfad definiert, als value der Interne Pfad. D.h. 
```ts
exposes: {
  "./ResetCounter": "./src/components/ResetCounter"
}
```
kann über `import Komponente from "nameDesModulsInHauptFrontend/ResetCounter"` eingebunden werden und stellt die Komponente bereit, welche unter `./src/components/ResetCounter` per `export default` exportiert wird.