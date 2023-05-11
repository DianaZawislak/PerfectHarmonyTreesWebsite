
import React from 'react';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full"
        width={50}
        src="https://cdn.discordapp.com/attachments/1095866309792772239/1103480468940263494/dianadetroit_image_of_a_firehose_for_logo_in_contemporary_style_0ad061b7-1ca8-41f6-99e3-fec804a4ea64.png"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
