

// -------------------- Upload File ----------------------

// import { UploadOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { Button, message, Upload } from 'antd';
// import React from 'react';

// const props: UploadProps = {
//   beforeUpload: file => {
//     const isPNG = file.type === 'image/png';
//     if (!isPNG) {
//       message.error(`${file.name} is not a png file`);
//     }
//     return isPNG || Upload.LIST_IGNORE;
//   },
//   onChange: info => {
//     console.log("hello",info.fileList);
//   },
// };

// const Test: React.FC = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Upload png only</Button>
//   </Upload>
// );

// export default Test;

// -------------Upload Single File ------------------

// import { UploadOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { Button, message, Upload } from 'antd';
// import React from 'react';

// const props: UploadProps = {
//   beforeUpload: (file) => {
//     const isPNG = file.type === 'image/png';
//     if (!isPNG) {
//       message.error(`${file.name} is not a png file`);
//     }
//     return isPNG || Upload.LIST_IGNORE;
//   },
//   onChange: (info) => {
//     console.log("File List:", info.fileList[0].name);
//   },
//   maxCount: 1, 
// };

// const Test: React.FC = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Upload png only (Single File)</Button>
//   </Upload>
// );

// export default Test;




// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

// const Test: React.FC = () => {
//   const [fileList, setFileList] = useState<UploadFile[]>([
//     {
//       uid: '-1',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//   ]);
//   // console.log("fileList " , fileList);
  

//   const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
//     // console.log("newFileList " , newFileList);
//     setFileList(newFileList);
//   };

//   const onPreview = async (file: UploadFile) => {
//     let src = file.url as string;
//     // console.log("src " , src);
//     if (!src) {
//       // console.log("not src" , src);
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         // console.log("reader " , reader);
        
//         reader.readAsDataURL(file.originFileObj as RcFile);
//         reader.onload = () => resolve(reader.result as string);
//       });

//       // console.log("src " , src);
      
//     }
//     const image = new Image();
//     // console.log("image " , image);
    
//     image.src = src;
//     console.log("image.src " , image.src);
    
//     // const imgWindow = window.open(src);
//     // imgWindow?.document.write(image.outerHTML);
//   };

//   return (
//     // <ImgCrop rotationSlider>
//       <Upload
//         // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//         listType="picture-card"
//         fileList={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//       >
//         {fileList.length < 5 && '+ Upload'}
//       </Upload>
//     // </ImgCrop>
//   );
// };

// export default Test;



// ---------------  Done Upload File ------------------------


// import { Upload, UploadFile } from 'antd';
// import React, { useState } from 'react'

// const Test = () => {
//   const [fileList, setFileList] = useState<UploadFile[]>([])

//   const handleUpload = (info: any) => {
//     let fileList = [...info.fileList];
//     // Accept 5 files only
//     fileList = fileList.slice(-5);
//     fileList.forEach(function (file, index) {
//       let reader = new FileReader();
//       reader.onload = (e : any) => {
//         file.base64 = e.target.result;
//         console.log("file.base64 " , file.base64);
//         // console.log("result " , e.target.result);
        
//       };
//       reader.readAsDataURL(info.file.originFileObj);
//       // console.log("info.file.originFileObj " , info.file.originFileObj);
      
//     });
//     // this.setState({ fileList: fileList });
//     setFileList(fileList)
//   };

//   console.log("fileList " , fileList);
  
//   return (
//     <div>

//       <div>
//         <Upload
//           listType={"text"}
//           multiple={true}
//           onChange={handleUpload}
//         >
//           <button >
//             Upload
//           </button>
//         </Upload>
//       </div>
//     </div>
//   )
// }

// export default Test




// =====================



import { Upload, UploadFile } from 'antd';
import React, { useState } from 'react'

const Test = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleUpload = (info: any) => {
    let fileList = [...info.fileList];
    // Accept 5 files only
    fileList = fileList.slice(-5);
    fileList.forEach(function (file, index) {
      let reader = new FileReader();
      reader.onload = (e : any) => {
        file.base64 = e.target.result;
        console.log("file.base64 " , file.base64);
        // console.log("result " , e.target.result);
        
      };
      reader.readAsDataURL(info.file.originFileObj);
      // console.log("info.file.originFileObj " , info.file.originFileObj);
      
    });
    // this.setState({ fileList: fileList });
    setFileList(fileList)
  };

  // console.log("fileList " , fileList);
  
  return (
    <div>

      <div>
        <Upload
        listType="picture-card"
          // listType={"text"}
          multiple={true}
          onChange={handleUpload}
        >
          <button >
            Upload
          </button>
        </Upload>
      </div>
    </div>
  )
}

export default Test




