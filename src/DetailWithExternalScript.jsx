export function DetailWithExternalScript() {
    return (
        <div>
            <script src="/externalScript.js" async />
            <h2>
                Ten komponent powinien załadować skrypt z pliku
                <strong>/externalScript.js</strong>.
            </h2>
        </div>
    );
}
