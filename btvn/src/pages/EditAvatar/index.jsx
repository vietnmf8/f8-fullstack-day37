import { useState, useEffect } from "react";
import placeholderAvatar from "@/assets/image.png";
import { Input } from "@/components/ui/input";

function EditAvatar() {
    // State lưu trữ blob URL cho ảnh preview
    const [avatarUrl, setAvatarUrl] = useState(() => {
        return localStorage.getItem("avatarUrl") || null;
    });

    /* Xử lý khi người dùng chọn file */
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        // Nếu không có ảnh => thoát hàm, giữ lại ảnh cũ
        if (!file) return;

        // Tạo blob file & cập nhật avatar
        const newAvatarUrl = URL.createObjectURL(file);
        localStorage.setItem("avatarUrl", newAvatarUrl);
        setAvatarUrl(newAvatarUrl);
    };

    /* Side Effect */
    useEffect(() => {
        // Clean up
        return () => {
            if (avatarUrl) {
                URL.revokeObjectURL(avatarUrl);
            }
        };
    }, [avatarUrl]);
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Preview Avatar</h1>
            <label className="flex flex-col items-center gap-2 cursor-pointer">
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handlePreviewAvatar}
                />
                <img
                    src={avatarUrl || placeholderAvatar}
                    alt="Avatar Preview"
                    className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
                />
                <span>Click để chọn ảnh</span>
            </label>
        </div>
    );
}

export default EditAvatar;
