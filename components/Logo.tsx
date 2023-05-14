
import React from 'react';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full"
        width={50}
        src="https://cdn.discordapp.com/attachments/1103865788944875622/1106442544130293780/logo.jpg"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
