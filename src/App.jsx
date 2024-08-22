import { useState } from "react";
import { DetailWithExternalScript } from "./DetailWithExternalScript";

function App() {
    const [isDetailsShown, setIsDetailsShown] = useState(false);

    return (
        <>
            <h1>
                To prosta aplikacja przedstawiająca nowe możliwości React 19.
            </h1>
            <button onClick={() => setIsDetailsShown(true)}>
                Pokaż szczegół ze skryptem
            </button>
            {isDetailsShown && <DetailWithExternalScript />}
        </>
    );
}

export default App;
