import { useState } from "react";

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    const handleChanges = (updatedValue) => {
        setValues(updatedValue);
      };

    return [values, setValues, handleChanges];
}

export default useForm;