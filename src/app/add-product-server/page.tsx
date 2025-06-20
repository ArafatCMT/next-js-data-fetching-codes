'use client'
import { AddProductHandler } from './actions/form-actions';
import { FormState } from './actions/form-actions';
import Submit from '@/components/submit'
import { useActionState } from "react";



export default function AddProductServer() {
    const initialState: FormState = {
        errors: {}
    };

    const [state, formAction, isPending] = useActionState(AddProductHandler, initialState)

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <form
                    action={formAction}
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "30px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "350px",
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: "50px" }}>Create Product</h2>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Title
                        </label>
                        <input
                            type="text"

                            name="title"

                            style={{
                                width: "100%",
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                        {state.errors.title && <p style={{ color: 'red' }}>{state.errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Price
                        </label>
                        <input
                            type="text"

                            name="price"

                            style={{
                                width: "100%",
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                        {state.errors.price && <p style={{ color: 'red' }}>{state.errors.price}</p>}
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Description
                        </label>
                        <textarea

                            name="description"

                            // rows="3"
                            style={{
                                width: "100%",
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        ></textarea>
                        {state.errors.description && <p style={{ color: 'red' }}>{state.errors.description}</p>}
                    </div>
                    {/* <Submit/> */}
                    <button
                        type="submit"
                        disabled={isPending}
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#4f46e5",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            cursor: isPending ? 'not-allowed' : 'pointer',
                            opacity: isPending ? 0.6 : 1,
                        }}
                    >
                        {isPending ? "Submitting..." : "Submit"}
                        {/* Submit */}
                    </button>

                </form>
            </div>

        </div>
    )
}