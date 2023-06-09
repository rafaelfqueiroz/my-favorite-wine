import { Server } from "./server";

class App {
    run() {
        new Server().start();
    }
}

new App().run();