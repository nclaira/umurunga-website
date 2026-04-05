// Join Apply Page
// Shows intro text and a Google Form embed placeholder.
// Replace the iframe src with your real Google Form link.

import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const JoinApplyPage = () => {
  return (
    <UmurungaLayout>
      <section className="py-16 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Page Header  */}
          <div className="bg-[#0064A2] text-white p-6 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Umurunga Family Application Form
            </h1>
            <p className="text-white/90 text-sm">
              Welcome to Umurunga Family application form, please fill all data as required,
              make sure all data you provide are valid.
            </p>
            <p className="text-red-300 text-sm mt-3">* Indicates required question</p>
          </div>

           {/* Google Form Embed */}
          {/* 
            REPLACE the src below with your actual Google Form embed URL.
            To get it: Open your Google Form → click Send → click embed icon → copy the src URL.
          */}

          <div className="border border-gray-200 rounded-b-lg bg-white p-6">
            <p className="text-gray-600 text-center mb-4">
              The application form is embedded below. If it doesn't load, 
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0064A2] underline ml-1"
              >
                click here to open it directly
              </a>.
            </p>

            {/* Google Form iframe placeholder */}
            <div className="w-full bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center min-h-[500px]">
              <p className="text-gray-400 text-center px-4">
                📝 Google Form will appear here.<br />
                <span className="text-xs">Replace the placeholder in the code with your Google Form embed URL.</span>
              </p>
            </div>

            {/* 
              When you have your Google Form URL, uncomment this and remove the placeholder above:
              <iframe
                src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full"
                title="Umurunga Family Application Form"
              >
                Loading…
              </iframe>
            */}
          </div>

        </div>
      </section>
    </UmurungaLayout>
  );
};

export default JoinApplyPage;
