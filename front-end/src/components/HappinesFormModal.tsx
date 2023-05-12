import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    happinessIndex: number;
    description: string;
};

type Props = {
    onClose: () => void;
};

const HappinessFormModal: React.FC<Props> = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
        reset();
        onClose();
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "2rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2>How was your day?</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="happinessIndex">Happiness Index:</label>
                    <input
                        type="range"
                        {...register("happinessIndex", { required: true })}
                    />
                    {errors.happinessIndex && (
                        <span>This field is required</span>
                    )}
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        {...register("description", { required: false })}
                    />
                    {errors.description && (
                        <span>This field is required</span>
                    )}
                    <button type="submit">Submit</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default HappinessFormModal;