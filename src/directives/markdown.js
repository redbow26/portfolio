const rules = [
    [/#{6}\s?([^\n]+)\n/g, '<h6>$1</h6>'],                                          // H6
    [/#{5}\s?([^\n]+)\n/g, '<h5>$1</h5>'],                                          // H5
    [/#{4}\s?([^\n]+)\n/g, '<h4>$1</h4>'],                                          // H4
    [/#{3}\s?([^\n]+)\n/g, '<h3>$1</h3>'],                                          // H3
    [/#{2}\s?([^\n]+)\n/g, '<h2>$1</h2>'],                                          // H2
    [/#\s?([^\n]+)\n/g, '<h1>$1</h1>'],                                             // H1
    [/([^\n]+)\n\s+=+/g, '<h1>$1</h1><hr/>'],                                       // H1 HR
    [/([^\n]+)\n\s+-+/g, '<h1>$1</h1><hr/>'],                                       // H2 HR
    [/\*\*([^\*\n]+)\*\*/g, '<b>$1</b>'],                                           // Bold
    [/\*([^\*\n]+)\*/g, '<i>$1</i>'],                                               // Italic
    [/__([^_]+)__/g, '<b>$1</b>'],                                                  // Bold
    [/_([^_]+)_/g, '<i>$1</i>'],                                                    // Italic
    [/((\n\d\..+)+)/g, '<ol>$1</ol>'],                                              // Ol
    [/((\n\*.+)+)/g, '<ul>$1</ul>'],                                                // Ul
    [/\n\d\.([^\n]+)/g, '<li>$1</li>'],                                             // Li -> Ol
    [/\n\*([^\n]+)/g, '<li>$1</li>'],                                               // Li -> Ul
    [/!\[([^\]]+)*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g, '<img style="max-width: 55%" src="$2" alt="$1"/>'],  // Image
    [/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'],                           // Link
    [/([^\n]+\n)/g, '<p>$1</p>'],                                                   // Paragraph
];

export default {
    bind(el) {
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template);
        });
        el.innerHTML = html
    }
}
