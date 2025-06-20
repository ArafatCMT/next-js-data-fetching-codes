'use client'
import { useFormStatus } from "react-dom";

export default function Submit() {
    const { pending } = useFormStatus();
    // console.log(useFormStatus())
    return (
        <div>
            <button
                type="submit"
                disabled={pending}
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    cursor: pending ? 'not-allowed' : 'pointer',
                    opacity: pending ? 0.6 : 1,
                }}
            >
                {pending ? "Submitting..." : "Submit"}
                {/* Submit */}
            </button>
        </div>
    )
}