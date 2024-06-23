import React from 'react';

type FooterLinkItem = {
  name: string;
  link: string;
};

type FooterLinkColumn = {
  headline: string;
  items: FooterLinkItem[];
};

type FooterProps = {
  footerLinks: FooterLinkColumn[];
};

export default function Footer({ footerLinks }: FooterProps) {
  const renderColumns = () => {
    return footerLinks.map((column, index) => (
      <div key={index}>
        <h2 className="text-lg font-semibold mb-4 ">{column.headline}</h2>
        <ul>
          {column.items.map((item, itemIndex) => (
            <li key={itemIndex} className="mb-2">
              <a href={item.link} className="hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <footer className=" text-white p-8 ">
      <div className=" mx-32 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {renderColumns()}
      </div>
    </footer>
  );
}
