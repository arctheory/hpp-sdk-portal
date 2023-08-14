import TextInput from "../components/core/TextInput";
import MainLayout from "../components/layouts/MainLayout";

function RequestAccessPage() {
    return (
        <MainLayout smallLogo>
            <div className="w-[512px] p-4 border-[0.5px] rounded space-y-1">
                <h2 className="text-2xl text-red-500 text-center">Request Access</h2>
                <p className="text-center text-sm text-gray-600">Please fill the required details to raise access</p>
                <form className="pt-3 w-full">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-end">
                            <TextInput labelText="First Name" name="firstname" required />
                        </div>
                        <div className="flex items-end">
                            <TextInput labelText="Last Name" name="lastname" required />
                        </div>
                        <div className="flex items-end">
                            <TextInput labelText="Company Name" name="company" required />
                        </div>
                        <div className="flex items-end">
                            <TextInput labelText="Designation" name="designation" required />
                        </div>
                        <div className="col-span-2 flex items-end">
                            <TextInput labelText="Company Email" name="email" type="mail" required />
                        </div>
                        <div className="col-span-2 flex items-start gap-2">
                            <input id="accept-terms" name="accept-terms" className="mt-[3.2px]" type="checkbox" />
                            <label htmlFor="accept-terms" className="text-sm text-gray-500">Check to confirm you are accepting our Terms and Conditions.</label>
                        </div>
                        <div className="col-span-2 flex items-end">
                            <button className="w-full py-4 text-center leading-none bg-red-500 text-white shadow-sm rounded border-[0.5px] border-red-700" type="submit">Submit Request</button>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}

export default RequestAccessPage;
