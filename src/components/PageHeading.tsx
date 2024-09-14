import React from "react";

interface PageHeadingProps {
    children: React.ReactNode;
}

export default function PageHeading({ children }: PageHeadingProps) {
    return (
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            {children}
        </h1>
    )
}
