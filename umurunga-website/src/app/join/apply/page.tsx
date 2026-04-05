// Join Apply Page
// Shows intro text then embeds the Google Form for membership application.

import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const JoinApplyPage = () => {
  return (
    <UmurungaLayout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Intro */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Membership Application
          </h1>
          <div className="bg-[#0064A2]/5 border border-[#0064A2]/20 rounded-xl p-6 mb-8 text-sm text-gray-700 space-y-3">
            <p>
              Welcome to the Umurunga Family membership application. By filling out this form,
              you are taking the first step toward joining a community dedicated to peace,
              healing, and unity in Rwanda.
            </p>
            <p>
              Please fill in all required fields honestly and completely. Your information will
              be reviewed by our leadership team. We will contact you via phone or email once
              your application has been reviewed.
            </p>
            <p className="font-medium text-[#0064A2]">
              Make sure you have your national ID card ready before you begin.
            </p>
          </div>

          {/* Google Form */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScHpVWGMt_Egw2hyMWqNsGGOZJnsteB7E--hO-vGbLNmvUDnw/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Umurunga Family Membership Application"
            >
              Loading form…
            </iframe>
          </div>

        </div>
      </section>
    </UmurungaLayout>
  );
};

export default JoinApplyPage;
