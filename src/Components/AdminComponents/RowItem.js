import React from 'react';

const RowItem = ({name, email}) => {
  return (
    <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-8 w-8 rounded-full" src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-männlich-avatar-profilbild-standard-benutzer-avatar-gast-avatar-einfach-menschlichen-kopf-vektor-ill.jpg" alt="Neil image"/>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                {name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                {email}
                </p>
            </div>
        </div>
    </li>
  );
};

export default RowItem;
