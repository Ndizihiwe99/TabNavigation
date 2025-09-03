import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  notificationCount?: number;
}

const tabsData: Tab[] = [
  {
    id: "profile",
    label: "Profile",
    content: (
      <div>
        <h2>Your Profile</h2>
        <p>Edit your personal information below:</p>
        <input placeholder="Name" className="border p-1 rounded" />
        <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">
          Update
        </button>
      </div>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    content: (
      <div>
        <h2>Settings</h2>
        <label>
          <input type="checkbox" /> Enable notifications
        </label>
      </div>
    ),
  },
  {
    id: "messages",
    label: "Messages",
    notificationCount: 3,
    content: (
      <div>
        <h2>Messages</h2>
        <ul>
          <li>You have a meeting tomorrow.</li>
          <li>New comment on your post.</li>
          <li>System maintenance scheduled.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "history",
    label: "History",
    content: (
      <div>
        <h2>History</h2>
        <button onClick={() => alert("History cleared!")}>Clear History</button>
        <ul>
          <li>Logged in yesterday</li>
          <li>Updated profile last week</li>
        </ul>
      </div>
    ),
  },
];

function TabNavigation() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex border-b border-gray-300">
        {tabsData.map(({ id, label, notificationCount }) => {
          const isActive = id === activeTab;
          return (
            <button
              key={id}
              className={`relative py-2 px-4 focus:outline-none ${
                isActive
                  ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(id)}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
              {notificationCount && notificationCount > 0 && (
                <span className="absolute -top-1 -right-2 inline-flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold px-2 py-0.5">
                  {notificationCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 p-4 bg-white rounded shadow min-h-[150px]">
        {tabsData.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default TabNavigation;
