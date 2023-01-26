import React, { useEffect, useState } from 'react'
import postServices from '../services/documentService';
import {saveAs} from 'file-saver'

function GetDocument() {

    const [documents, setDocuments] = useState([]);

    const fetchDocuments = async() => {
         setDocuments(await postServices.getPost());
    }

    useEffect(() => {
        fetchDocuments();
    },[])

    const handleDownload = (imageUrl) => {
        console.log(imageUrl);
        saveAs(`http://localhost:4000/document/${imageUrl}`, 'document.jpg')
    }

    console.log(documents);
  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        {documents.data != undefined && documents.data.length > 0 && (
              
              <div className="overflow-hidden">
            <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                  SI No. 
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                  Document 
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                  Document title
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Date
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Time
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Handle
                </th>
              </tr>
            </thead>
            <tbody>
                  {
                    documents.data.map((element,i) => (
                        <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                    <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap ">
                      <img src={`http://localhost:4000/document/${element.image}`} style={{width:'100px', height:'100px'}}/>
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                       {element.title}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {element.date}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {element.time}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleDownload(element.image)} download class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">download</button>
                    </td>
                    </tr>
                    ))
                  }
            </tbody>
          </table>
        </div>

        )}
      </div>
    </div>
  </div>

  )
}

export default GetDocument