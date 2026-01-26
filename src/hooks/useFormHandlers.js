import { useCallback } from 'react';

const useFormHandlers = ({
    setName,
    setSede,
    setPrograma,
    setSemestre,
    setEmail,
    setTipoDocumento,
    setIdNumber,
    setPhoneNumber
}) => {

    const handleInputName = useCallback((e) => {
        setName(e.target.value.trim().toUpperCase());
    }, [setName]);

    const handleSelectSede = useCallback((e) => {
        setSede(e.target.value);
    }, [setSede]);

    const handleInputPrograma = useCallback((e) => {
        setPrograma(e.target.value);
    }, [setPrograma]);

    const handleInputSemestre = useCallback((e) => {
        setSemestre(e.target.value.trim().toUpperCase());
    }, [setSemestre]);

    const handleInputEmail = useCallback((e) => {
        setEmail(e.target.value.trim());
    }, [setEmail]);

    const handleSelectId = useCallback((e) => {
        setTipoDocumento(e.target.value);
    }, [setTipoDocumento]);

    const handleInputId = useCallback((e) => {
        setIdNumber(e.target.value.trim());
    }, [setIdNumber]);

    const handlePhoneNumber = useCallback((e) => {
        setPhoneNumber(e.target.value.trim());
    }, [setPhoneNumber]);

    return {
        handleInputName,
        handleSelectSede,
        handleInputPrograma,
        handleInputSemestre,
        handleInputEmail,
        handleSelectId,
        handleInputId,
        handlePhoneNumber
    };
};

export default useFormHandlers;