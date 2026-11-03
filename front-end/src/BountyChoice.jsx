import './BountyChoice.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BountyChoice = props => {
    const [bounty, setBounty] = useState('')
    const [choices, setChoices] = useState([])
    const [personChosen, setPersonChosen] = useState('')

    // the bounty amount should be taken from data of the post the user came from
    // where they clicked resolve
    // for now, we have placeholder:
    useEffect(() => {
        setBounty('$20')
        // should get choices from list of people in user's messages screen
        // for now, placeholder:
        setChoices(['Alice A.', 'Bob B.', 'Carol C.', 'Dave D.'])
    }, [])

    const chose = name => {
        if (name === personChosen) {
            console.log('Person has been unchosen!')
            setPersonChosen('')
        }
        else {
            console.log('Person has been chosen!')
            setPersonChosen(name)
            console.log(name)
        }
    }

    // when submitting form button, obv save the user who was chosen to receive the bounty
    const submit = e => {
        e.preventDefault()
        console.log(`Final decision made: give bounty to ${personChosen}!`)
        // redirect to confirmation page afterwards
    }

    // should get the associated pfps from back-end according to users
    // from messages
    const pfps = ['pfpA.jpg', 'pfpB.jpg', 'pfpC.jpg', 'pfpD.jpg']

    return (
        <div className='bountyChoice'>
            <h1>Choose Bounty Receiver</h1>
            <p id='text'>Among the people you have messaged, you may select who will receive 
                the bounty you have set. Selecting them will notify them immediately. </p>
            <div className='bountyDisplay'>
                <h2>Bounty</h2>
                <p>{bounty}</p>
            </div>
                
            <div className='choices'>
                {/* need to make list out of people in mesages history */}
                {/* for this part, might be better to change to mapping for each */}
                
                {choices.map((choice, index) => (
                    <button
                        key={choice}
                        className={personChosen === choice ? 'active' : 'choice'}
                        onClick={() => chose(choice)}>
                        <img className='pfp' src={`../public/pfps/${pfps[index]}`} />
                        <p className='name'>{choice}</p>
                    </button>
                ))}
            </div>

            <form onSubmit={submit}>
                <input 
                    type='submit' 
                    id={!personChosen ? 'disabled' : 'submit'} 
                    disabled={!personChosen} 
                    value='Confirm'
                />
            </form>
            {/* return to post user came from */}
            <button id='cancel'>Cancel</button>
        </div>
    );
}

export default BountyChoice