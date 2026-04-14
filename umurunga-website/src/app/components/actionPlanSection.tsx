// Action Plan Section
// View Online opens the PDF in Google Drive (works on all browsers)
// Download saves the PDF locally

import { FileText, Download, Eye } from "lucide-react";
import { siteMedia } from "@/lib/siteMedia";

const actionPlanConfig = {
  year: "2025–2026",
  title: "Our Annual Action Plan",
  description:
    "Explore our roadmap for the year — the activities, goals, and impact we plan to achieve together.",
  pdfUrl: siteMedia.actionPlanPdf,
  viewUrl: "https://drive.google.com/file/d/1dxMxxfyij79JeUaZJsbODRcCAe381Wzt/view?usp=sharing",
};

const ActionPlanSection = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">

            {/* Top colored bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#0064A2] via-[#0DB14B] to-[#0064A2]" />

            <div className="p-6 sm:p-8">

              {/* Icon + Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0064A2]/15 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-[#0064A2]" />
                </div>
                <span className="px-3 py-1 bg-[#0DB14B]/10 text-[#0DB14B] text-xs font-semibold rounded-full">
                  {actionPlanConfig.year}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {actionPlanConfig.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {actionPlanConfig.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* View Online — works on Chrome, Edge, Firefox, Safari */}
                <a
                  href={actionPlanConfig.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#005080] transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  View Online
                </a>

                {/* Download PDF */}
                <a
                  href={actionPlanConfig.pdfUrl}
                  download="Umurunga-Action-Plan.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#0DB14B] text-[#0DB14B] rounded-full font-medium hover:bg-[#0DB14B]/10 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ActionPlanSection;
