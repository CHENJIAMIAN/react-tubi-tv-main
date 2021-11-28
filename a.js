// import babel from 'babel-core'
const babel = require('babel-core');
// const output = babel.transform(
//     `
// React.createElement('span', {
//     className: langClass,
// })
// `,
//     {
//         plugins: ['transform-react-createelement-to-jsx'],
//     }
// );
function convert(source) {
    const { code } = babel.transform(source, {
        babelrc: false,
        plugins: ['transform-react-createelement-to-jsx'],
    });
    const { ast } = parseWithJSX(code);
    return { code, ast };
}
function parseWithJSX(source) {
    return babel.transform(source, {
        babelrc: false,
        // plugins: ['@babel/syntax-jsx', '@babel/syntax-object-rest-spread'],
    });
}

const output = convert(`
React.createElement(
    'div',
    {
        id: c,
        tabIndex: selected ? -1 : 0,
        className: css,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onClick: this.handleClick,
        onKeyPress: onKeyPress,
        'aria-haspopup': 'listbox',
        role: 'button',
        ref: function (x) {
            orginData.node = x;
        },
    },
    user && void 0 !== user.label
        ? React.createElement(
              'span',
              {
                  className: 'Input__input',
                  style: user.optionStyle,
              },
              user.label
          )
        : null,
    unread
        ? React.createElement(
              'span',
              {
                  className: 'Input__label',
              },
              error
          )
        : null,
    !unread && placeholder
        ? React.createElement(
              'span',
              {
                  className: 'Input__label',
              },
              placeholder
          )
        : null,
    React.createElement('span', {
        className: langClass,
    }),
    selected
        ? this.renderMobileSelect()
        : this.renderDesktopSelect()
);
`);
function a() {
    return (
        <div
            id={c}
            tabIndex={selected ? -1 : 0}
            className={css}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onClick={this.handleClick}
            onKeyPress={onKeyPress}
            aria-haspopup="listbox"
            role="button"
            ref={function (x) {
                orginData.node = x;
            }}
        >
            {user && void 0 !== user.label ? (
                <span className="Input__input" style={user.optionStyle}>
                    {user.label}
                </span>
            ) : null}
            {unread ? <span className="Input__label">{error}</span> : null}
            {!unread && placeholder ? (
                <span className="Input__label">{placeholder}</span>
            ) : null}
            <span className={langClass} />
            {selected ? this.renderMobileSelect() : this.renderDesktopSelect()}
        </div>
    );
}
console.log(output);
