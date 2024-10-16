import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { db } from "./Firebase/firebaseConfig"; // Adjust the path as necessary
import { doc, getDoc, setDoc } from "firebase/firestore";

const HomBanTwo = () => {
  const { isAdmin } = useContext(UserContext);
  const [bannerData, setBannerData] = useState([]);
  const [newDescription, setNewDescription] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAUM = async () => {
      try {
        const docRef = doc(db, "HPnews", "News_Articles");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBannerData(docSnap.data().content || []);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAUM();
  }, []);

  const handleAddNewText = () => {
    setNewTitle("");
    setNewDescription("");
    setIsAdding(true);
    setEditIndex(null);
  };

  const handleSaveNewText = async () => {
    try {
      const updatedBannerData =
        editIndex !== null
          ? bannerData.map((item, index) =>
              index === editIndex
                ? { title: newTitle, description: newDescription }
                : item
            )
          : [...bannerData, { title: newTitle, description: newDescription }];

      await setDoc(doc(db, "HPnews", "News_Articles"), {
        content: updatedBannerData,
      });
      setBannerData(updatedBannerData);
      setIsAdding(false);
      console.log("Text successfully added/updated");
    } catch (error) {
      console.error("Error adding/updating text: ", error);
    }
  };

  const handleEditText = (index) => {
    setNewTitle(bannerData[index].title);
    setNewDescription(bannerData[index].description);
    setIsAdding(true);
    setEditIndex(index);
  };

  const handleDeleteText = async (index) => {
    try {
      const updatedBannerData = bannerData.filter((_, i) => i !== index);
      await setDoc(doc(db, "HPnews", "News_Articles"), {
        content: updatedBannerData,
      });
      setBannerData(updatedBannerData);
      console.log("Text successfully deleted");
    } catch (error) {
      console.error("Error deleting text: ", error);
    }
  };

  return (
    <div className="bg-white flex w-full mb-32">
      <div className="flex font-joe flex-col items-center justify-center mx-auto mt-28 gap-2 lg:gap-6">
        <p className="font-bold text-xl lg:text-5xl">
          Our Investment Philosophy
        </p>
        <div className="flex flex-col items-center  lg:text-xl lg:leading-tight sm:text-xs text-[#999999]">
          <p>
            Prioritizing Safeguarding of Capital Against Market Shocks and
            Volatility
          </p>
        </div>
        {/* <div className="flex flex-col text-xs gap-10 justify-between p-20 sm:p-10">
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-12">
                        {bannerData && bannerData.length > 0 ? (
                            bannerData.map((item, index) => (
                                <div key={index} className='lg:w-1/4 w-full  h-auto shadow-md rounded-lg flex flex-col'>
                                    <div className="flex font-sans flex-col gap-4 p-6">
                                        <div className="flex flex-col gap-4 pt-2">
                                            <p className='font-semibold leading-tight text-base '>{item.title}</p>
                                            <p className='text-sm leading-snug'>{item.description}</p>
                                        </div>
                                        {isAdmin && (
                                            <div className="flex justify-end gap-2 mt-4">
                                                <button onClick={() => handleEditText(index)} className="bg-black/80 text-white px-2 py-1 rounded hover:bg-black">Edit</button>
                                                <button onClick={() => handleDeleteText(index)} className="bg-black/80 text-white px-2 py-1 rounded hover:bg-black">Delete</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-xl'>No banner data available</p>
                        )}
                    </div>
                </div>

                {isAdmin && (
                    <>
                        {!isAdding && (
                            <button onClick={handleAddNewText} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Add Some Description and News
                            </button>
                        )}
                        {isAdding && (
                            <div className="flex flex-col gap-4 w-full bg-white shadow-md p-8">
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="Enter title"
                                    className="border p-3 rounded outline-none placeholder:text-sm"
                                />
                                <textarea
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    placeholder="Enter new description"
                                    className="border p-3 rounded outline-none placeholder:text-sm"
                                    rows={6}
                                />
                                <button onClick={handleSaveNewText} className="bg-green-500 text-white px-4 py-2 rounded">
                                    Save Text
                                </button>
                            </div>
                        )}
                    </>
                )} */}
        <div className="flex lg:flex-row gap-20 lg:gap-32 m-10 p-5  flex-col lg:items-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src="g1.svg" className="h-20" alt="" />
            <div className="flex flex-col items-center text-[#6b9f25] text-xl font-semibold font-joe">
              <p>Preserving</p>
              <p>Capital in Volatile Markets</p>
            </div>
            <p className="lg:w-[300px] text-center">
              We prioritize preserving your capital in unpredictable market
              conditions, shielding your investments from the volatility that
              often catches investors off guard.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src="g2.svg" className="h-20" alt="" />
            <div className="flex flex-col items-center text-[#6b9f25] text-xl font-semibold font-joe">
              <p>Stable & Risk—Adjusted</p>
              <p>Growth</p>
            </div>
            <p className="lg:w-[300px] text-center">
              We focus on
              consistent, long-term growth, offering protection against market
              swings while delivering sustainable returns.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-5  items-center">
            <img src="g3.svg" className="h-20" alt="" />
            <div className="flex flex-col items-center text-[#6b9f25] text-xl font-semibold font-joe">
              <p>Building</p>
              <p>Investor Confidence</p>
            </div>
            <p className="lg:w-[300px] text-center">
              By emphasizing capital protection first, we empower investors to
              weather market turbulence, ensuring peace of mind while navigating
              uncertainty and focusing on steady growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomBanTwo;
