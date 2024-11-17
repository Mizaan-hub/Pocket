import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10">
        <div>
          {/* "//public/pocket_logo_white.png" */}
          <Image
            src="/pocket_logo_white.png"
            alt="Pocket Logo"
            width={224}
            height={82}
            className="h-auto"
          />
        </div>
        <div className="space-y-5 text-white">
          <h1 className="h1">Manage your files in the best way</h1>
          <p className="body-1">
            This is a place where you can store all your documents and much more
          </p>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
