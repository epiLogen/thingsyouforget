import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const quotecreate = (props) => {
    return(
        <Create title='Create a Quote' {...props}>
            <SimpleForm>
                <TextInput multiline source='text' />
                <TextInput source='book' />
                <TextInput source='author' />
                
            </SimpleForm>
        </Create>

    )
};

export default quotecreate;