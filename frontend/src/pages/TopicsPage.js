function TopicsPage() {
    return (
       <>
            <h2>
                Web Dev Concepts
            </h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#imagesInfo">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">Cascading Stylesheets</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>
                    The designated homepage serves as the root directory for a web application.
                    Whenever a server receives a <strong> GET request</strong> for '/', this page is returned.
                    The name of the homepage depends on the language, for example Apache
                    is configured to look for "index.html", while Microsoft .NET allows "default.html".
                </p>
                <p>
                    The network tab under the page inspector shows the <strong>Request URL, Request  Method, 
                    Status Code,</strong> and <strong> Referrer Policy</strong> for each element. The <strong> Response Headers</strong>
                    and <strong>Request Headers</strong> are also visible. There is more information available 
                    when viewing the page from the web server. For example, a <strong>Remote Address</strong> is provided, along with the 
                    Content Length, Type, and Encoding of the response. There are also new elements available when viewing the file via the web server:
                    favicon.ico and a couple JavaScript files.
                </p>
                <p>
                    Favicon.ico has a status code of 200 because it was successfully retrieved from the server. Main.css and main.js, on the other hand,
                    were not found by the server, since I didn't provide either of these files in the directory. Therefore, the two files have status 404.
                    Main.css and main.js are the default files for the CSS and JavaScript instructions.
                </p>
                <p>
                    The web server's URL is https://web.engr.oregonstate.edu/~lermani/A1-lermani/. The <strong>Scheme</strong> is HTTPS. 
                    There are two <strong>subdomains,</strong> 'web', and 'engr', and the <strong>host domain</strong> is 'oregonstate.edu'.
                    The path to the <strong>resource</strong> is '~lermani/A1-lermani/'.
                </p>
            </article>
            <article id ="frontendDesign">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> involves improving the user experience for a web product.
                    In practice, a developer should consider <strong>visual design</strong> in order to make the website experience
                    seamless, entertaining, and easy to use. For example, picking a consistent color scheme with dark letters improves readability. Adding a 
                    navigation section also organizes the content visually, and improves accessibility for users using narration.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>The website consistently helps users accomplish their goal(s).</dd>
                    <dt>Efficient</dt>
                    <dd>Users can perform tasks quickly and with the least number of steps.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>Users understand how to locate the functions of the site, and remember
                        how next time. </dd>
                    <dt>Error-free</dt>
                    <dd>Users will accomplish their goal(s) without running into any roadblocks</dd>
                    <dt>Enjoyable/Engaging</dt>
                    <dd>The site fits the needs of the intended audience. Users are likely to return.</dd>
                </dl>
                <p>
                    HTML5 provides several <strong>page layout tags</strong> which organize the content of a website.
                    <strong>Header</strong> tags denote a banner or masthead for the website. The header remains the same from page to
                    page so that the user knows they are on the same site. The <strong>main</strong> element denotes the primary content
                    block. <strong>Section</strong> tags further divide content based on thematic grouping. <strong>Headings</strong> are another
                    type of tag which are responsible for announcing content. The key concept around headings is their nesting levels: 
                    each heading has a level 1-6 which represents its depth. Section tags generally have a heading tag as their first child
                    to denote the thematic grouping. If there is no good way to classify the content in the section, it is often
                    better to use an <strong>article</strong> tag. An article tag denotes a specific topic, usually containing
                    a second-level headline to describe it. Another important tag is the <strong>footer</strong> tag, which typically resides beneath
                    main and holds legal and contact information, as well as critical links. 
                </p>
                <ol>
                    <li><strong>Anchors</strong> can link to external content via <code>&lt;a href="example.org"&gt;Link Title&lt;\a&gt;</code>.</li>
                    <li>To link to internal content, anchors should use the content's ID like so: 
                        <code>&lt;a href="#topic"&gt;Topic Title&lt;\a&gt;.</code></li>
                    <li>To link from page-to-page, anchors should use  a <strong>relative path</strong> to the local content: 
                        <code>&lt;a href="page.html"&gt;Page Title&lt;\a&gt;</code>. An <strong>absolute path</strong> is necessary for any external
                        page links.</li>
                </ol>
            </article>
            <article id = "imagesInfo">
                <h3>Images</h3>
                <p>
                    There are several key specifications for <strong>optimizing images</strong>. Using a descriptive file name is one such technique.
                    This is helpful in terms of <strong>search engine optimization</strong>, since search engines use the file name to categorize images. 
                    Optimized images must also load quickly, otherwise the user may lose interest. The main way to improve image load time is to reduce the file size.
                    Image compression algorithms can reduce the size of a file with minimal or no loss in data. Reducing the size of images through cropping also 
                    helps to manage file size, along with making the actual content of the image more presentable.
                </p>
                <p>
                    File load time and quality is directly related
                    to <strong>file format</strong>. Each file format has a different use case. Photographs usually use the .JPG or .WebP format, while line-art and animated graphics
                    generally use .PNG or .GIF. The file format should match the image's <strong>color mode</strong>: RGB for .PNG, .JPG, .WebP, vs. Indexed for .GIF, which uses 
                    pre-defined colors. Given that monitors often vary in their resolutions, it's also best practice to provide multiple image sizes for resolutions 
                    between 72 and 300+ pixels per inch.
                </p>
            </article>
            <article id = "favicons">
                <h3>Favicons</h3>
                <p>
                    By providing multiple formats for favicons in the root directory, the website can quickly serve the correct format for quick loading. 
                    Favicon generators will produce files with different pixel resolutions, in addition to file formats for mobile viewing.
                    Typically, favicons are used as the icons in the top left of a browser tab. 
                </p>
            </article>
            <article id = "cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    <strong>CSS</strong> is a more powerful way to style the elements of your HTML file by group. For example,
                    in a CSS file, we can specify styling properties of all body, main, and header elements. We can also specify
                    for smaller groups, for example all h1 elements within a head element. This way, styles are easily organized and can be updated as
                    the website grows. By using CSS to specify spacing, text style,
                    and responsive properties, we can improve on the usability, readability, and legibility of our website. 
                </p>
                <p>
                    There are multiple ways to incorporate CSS. External CSS rules (in an external file) are typically the most efficient 
                    way to style HTML. This is done via a link element within the head area of the site. If there are other stylesheets for 
                    specific components, they can also be linked in the head, or they can be imported using @import "filename.css". One-off 
                    style changes can be implemented directly in HTML/JavaScript as well. One way is to use the &lt;style&gt; tag, and within include
                    the element to be updated, followed by the rules. Style can also be used within an element, e.g., <code>&lt;h1 style = "color:black"&gt;</code>.
                    The last way to style is directly in JavaScript, by manipulating the <strong>Document Object Model</strong> (DOM) like so:
                    <code>document.getElementsByTagName('h1').style.color = 'black';</code>
                </p>

            </article>
    </>
    );
}
export default TopicsPage;