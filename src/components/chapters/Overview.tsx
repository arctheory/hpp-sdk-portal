import Note from "../core/Note";

function Overview() {
    return (
        <div className="space-y-4">
            <div className="px-8">
                <h1 className="text-3xl font-bold">Overview</h1>
            </div>
            <div className="px-8 text-gray-700">Learn how to integrate HPP SDK in your website or application. The server and client side code snippets in this docs comes in different languages.</div>
            <div className="px-8">
                <Note>
                    Before going through the docs your organisation must be registered with HPP. An unique organisation id, DBS provided public key and your own private key for the public key used for registration.
                </Note>
            </div>
        </div>
    );
}

export default Overview;
