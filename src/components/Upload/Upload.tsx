import React from "react";

import "./Upload.scss";

interface Props {
  onChange?: (files: FileList) => void;
  multiple?: boolean;
  accept?: string;
  children: React.ReactNode;
}

const Upload = ({ onChange, multiple = false, accept, children }: Props) => {
  const $ref = React.useRef<HTMLInputElement | null>(null);
  const handleClick = React.useCallback(() => {
    if ($ref.current) {
      $ref.current.click();
    }
  }, []);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0 && onChange) {
        onChange(files);
      }
    },
    [onChange]
  );

  return (
    <div className={`ui-upload`} onClick={handleClick}>
      {children}
      <input
        type="file"
        ref={$ref}
        style={{ display: "none" }}
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
      />
    </div>
  );
};

export default Upload;
