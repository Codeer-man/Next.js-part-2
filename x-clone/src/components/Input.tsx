"use client";

import { useSession } from "next-auth/react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useRef, useState, useEffect, ChangeEvent } from "react";
import { app } from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Input() {
    const { data: session } = useSession();
    const ImagePicRef = useRef<HTMLInputElement>(null); // Type for file input
    const [ImageFileLoading, setImageFileLoading] = useState<boolean>(false);
    const [ImageFileURL, setImageFileURL] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // Type as File or null
    const [inputText, setInputText] = useState<string>(""); // String type for input

    const addImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Use optional chaining to handle undefined
        if (file) {
            setSelectedFile(file);
            setImageFileURL(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        if (selectedFile) {
            uploadImageToStorage();
        }
    }, [selectedFile]);

    const uploadImageToStorage = () => {
        if (!selectedFile) return; // Ensure selectedFile exists
        setImageFileLoading(true);
        const storage = getStorage(app);
        const fileName = `${new Date().getTime()}-${selectedFile.name}`;
        const storageref = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageref, selectedFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
            },
            (error) => {
                console.log(error);
                setImageFileLoading(false);
                setImageFileURL(null);
                setSelectedFile(null);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageFileURL(downloadURL);
                    setImageFileLoading(false);
                });
            }
        );
    };

    if (!session) return null;

    return (
        <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
            <img
                src={session?.user?.image || "/default-avatar.png"}
                alt="user-image"
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-90"
            />
            <div className="w-full divide-y divide-gray-200">
                <textarea
                    placeholder="What's Happening?"
                    rows={2}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-799"
                ></textarea>
                {selectedFile && (
                    <img
                        src={ImageFileURL as string} // Assert that URL is string
                        alt="selected-image"
                        className="h-20 w-auto rounded-md object-cover"
                    />
                )}
                <div className="flex items-center justify-between pt-2.5">
                    <HiOutlinePhotograph
                        onClick={() => ImagePicRef.current?.click()}
                        className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"
                    />
                    <input
                        type="file"
                        ref={ImagePicRef}
                        accept="image/*"
                        onChange={addImage}
                        hidden
                    />
                    <button
                        disabled={ImageFileLoading || (!inputText && !selectedFile)}
                        className="bg-blue-500 text-white px-3 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                    >
                        {ImageFileLoading ? "Uploading..." : "Post"}
                    </button>
                </div>
            </div>
        </div>
    );
}
