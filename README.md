# Über
Dieses Repo beinhaltet einen PoC für Monorepos mit **React**. 
Es verwendet **Vite** als Build-Tool.

Dies ist ein Mono-Repo, welches 2 Komponenten beinhaltet:

## packages/main
Das ist die "Haupt"-Anwendung. In sie wird ein Microfrontend in Form einer React-Komponente eingebunden. 
Das Microfrontend ist nicht mehr als eine Komponente. Sie kann über Props Daten annehmen und zurückgeben.

## packages/microfrontend-counter-reset
Das ist ein Microfrontend. Es wird zur Laufzeit in das Haupt-Frontend eingebunden. Dafür ruft das Hauptfrontend es auf einem anderen Server auf.   
**Wichtig dabei:** Es müssen CORS-Header gesetzt sein. Sonst blockiert der Browser den Aufruf des Moduls auf einem anderen Server / Port.

# Installation
Im Wurzelprojekt `npm i` ausführen. Die Abhängigkeiten für die Unterprojekte werden dabei auch installiert.

# Build
Im Wurzelprojekt `npm run build`. Im Hintergrund ruft `lerna` die Build-Skripte alles Module unter `packages/*` auf.

# Serve
Im Wurzelprojekt `npm run serve`. Es werden dadurch Haupt (`:5000`)- und Micro-Frontend (`:5001`) gestartet.

# Aufrufen
Das Haupt-Repo kann unter http://localhost:5000 aufgerufen werden.
Wird der Netzwerktab aufgemacht sollte erkennbar sein, dass Anfragen an 
http://localhost:5001 geschickt werden.

# Bedenken

## Developer Experience
Ist man im Haupt-Frontend, wird das Microfrontend als minifiziertes Modul eingebunden. Hier kommen React's Devtools eventuell an Probleme.  
Arbeitet man am Micro-Frontend stellt sich die Frage wie der Dev-Server die Webseite darstellen soll. 
Wenn nur das Micro-Frontend angezeigt werden soll, sollte das zu keinen Problemen führen.  
Ein Dev-Server mit der Haupt-Anwendung hingegen schon. Hier müsste das Haupt-Frontend als Modul eingebunden werden und so umgeschrieben werden, dass es das Überschreiben der Microfrontends zulässt.

Auch verliert man durch den Import die Typ-Sicherheit der Microfrontend-Komponente.
Ändert sich das Interface zwischen Haupt- und Microfrontend schlägt der Build nicht fehl.

## Styling

Das Stylesheet der Microfrontends scheint sehr lange zu brauchen um geladen zu werden. Dies hat zu Folge, dass die Komponente für ca. 2 Sekunden ungestyled (bzw. nur das Styling des Haupt-Frontends übernimmt) bleibt und es zu einem Layout-Shift kommt. 