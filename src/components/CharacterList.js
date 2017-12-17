'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { setCurrentCharacter } from "../reducer/character/actions";

const CharacterList = ({ characters, setCharacter }) =>
    <div id="character-list" className="col-md-6">
        <h1>Characters</h1>
        <ul>
            {characters.map((c, i) =>
                <li key={c.name} onClick={setCharacter(i + 1)}>
                    {c.name}
                </li>
            )}
        </ul>
    </div>;


const mapStateToProps = ({ characters }) => ({ characters });

const mapDispatchToProps = dispatch => ({
    setCharacter(id) {
        return () => {
            dispatch(setCurrentCharacter(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);