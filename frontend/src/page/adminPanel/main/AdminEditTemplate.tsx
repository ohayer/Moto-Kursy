import React, { ReactNode } from "react";

interface AdminEditTemplateProps {
  children: ReactNode;
}

const AdminEditTemplate: React.FC<AdminEditTemplateProps> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <a href="/admin" className="text-6xl">
        🔙
      </a>
      <div className="mb-5 sm:p-6">{children}</div>
    </div>
  );
};

export default AdminEditTemplate;
