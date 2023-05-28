import { RichText } from "@wordpress/block-editor";
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('arc/genericheading', {
    title: 'Generic Heading',
    attributes: {
        text: { type: 'string' },
        size: { type: 'string', default: 'large' },
    },
    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    function handleTextChange(x) {
        props.setAttributes({ text: x });
    }
    console.log(props.attributes);
    return (
        <>
            <RichText
                value={props.attributes.text}
                onChange={handleTextChange}
            />
        </>
    );
}

function SaveComponent() {
    return <>he999llo</>;
}
