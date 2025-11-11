import { useEffect, useState } from "react";

function PreviewAvatar() {
    const [avatarUrl, setAvatarUrl] = useState("");
    const defaultAvatar =
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        // Lấy file người dùng chọn
        setAvatarUrl(file ? URL.createObjectURL(file) : "");
    };

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatarUrl);
        };
    }, [avatarUrl]);
    return (
        <div>
            <h1>Update Avatar</h1>
            <label>
                <input type="file" multiple hidden onChange={handleChange} />
                <img
                    className="size-25 rounded-full"
                    src={avatarUrl || defaultAvatar}
                    alt=""
                />
            </label>
        </div>
    );
}

export default PreviewAvatar;
