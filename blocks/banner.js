import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
registerBlockType('arc/banner', {
    title: 'Banner',
    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent() {
    const useMeLater = (
        <>
            <h1 className="headline headline--large">Welcome!</h1>
            <h2 className="headline headline--medium">
                We think you&rsquo;ll like it here.
            </h2>
            <h3 className="headline headline--small">
                Why don&rsquo;t you check out the <strong>major</strong>{' '}
                you&rsquo;re interested in?
            </h3>
            <a href="#" className="btn btn--large btn--blue">
                Find Your Major
            </a>
        </>
    );
    return (
        <div className="page-banner">
            <div
                className="page-banner__bg-image"
                style={{
                    backgroundImage:
                        "url('/wp-content/themes/arc-theme/images/library-hero.jpg')",
                }}
            >
                <div className="page-banner__content container t-center c-white">
                    <InnerBlocks allowedBlocks={['arc/genericheading']} />
                </div>
            </div>
        </div>
    );
}

function SaveComponent() {
    return (
        <div className="page-banner">
            <div
                className="page-banner__bg-image"
                style={{
                    backgroundImage:
                        "url('/wp-content/themes/arc-theme/images/library-hero.jpg')",
                }}
            >
                <InnerBlocks.Content />
            </div>
            <div className="page-banner__content container t-center c-white"></div>
        </div>
    );
}
