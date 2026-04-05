import { useState, useEffect } from 'react';

const Teste = () => {

    const [name, setName] = useState('Victor');

    const handleChangeName = () => {
        setName(prev => prev === 'Victor' ? 'Wesley' : 'Victor')
    }

    useEffect(() => {
        alert("O nome foi alterado para " + name);
    },[name]);

  return (
    <div>
        <p>
            {name}
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { Teste };
