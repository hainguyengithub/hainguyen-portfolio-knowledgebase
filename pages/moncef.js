import React from "react";

function moncef(props) {
  return (
    // <div id="container"></div> perhaps?
    <section id="main">
      <article>
        <header>
          <h1 className="entry-title">
            Which Shell Am I Using? How Can I Switch?
          </h1>
          <div className="meta">
            Updated
            <time className="meta-date" datetime="2022-03-13">
              Mar 13, 2022
            </time>
            <ul className="meta-tags">
              <li className="tag">
                <a href="/tags/mac/" rel="tag">
                  mac
                </a>
              </li>
              <li className="tag">
                <a href="/tags/terminal/" rel="tag">
                  terminal
                </a>
              </li>
              <li className="tag">
                <a href="/tags/zsh/" rel="tag">
                  zsh
                </a>
              </li>
              <li className="tag">
                <a href="/tags/bash/" rel="tag">
                  bash
                </a>
              </li>
              <li className="tag">
                <a href="/tags/homebrew/" rel="tag">
                  homebrew
                </a>
              </li>
              <li className="tag">
                <a href="/tags/beginner/" rel="tag">
                  beginner
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="affiliate"></div>
        <h2 id="finding-your-current-shell">Finding your current shell</h2>

        <p>
          Starting with macOS Catalina (10.15), Apple set the default
          <a href="https://en.wikipedia.org/wiki/Shell_(computing)">shell</a> to
          the <a href="https://en.wikipedia.org/wiki/Z_shell">Z shell</a> (zsh).
          In previous macOS versions, the default was{" "}
          <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">Bash</a>.
        </p>

        <p>
          Each shell supports a configuration file in your macOS{" "}
          <a href="/home-is-where-the-heart-is/">Home</a> folder that gets read
          every time you open a new terminal window (or tab). This allows the
          shell environment to be set up properly with your preferences, and so
          that the tools you depend on are ready to use.
        </p>

        <p>
          In <code>zsh</code>, the configuration file is <code>~/.zshrc</code>.
          In <code>bash</code>, it&rsquo;s
          <code>~/.bash_profile</code>. Some people might tell you to add things
          to your <code>~/.bashrc</code>. Thank them for their help, and teach
          them that <code>.bashrc</code> does not get read automatically on a
          Mac when you open up a new shell window.
        </p>

        <p>
          If you&rsquo;re not sure which shell you&rsquo;re using, there are a
          couple of ways to find out. One is to run this command:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              <span className="nb">echo</span> <span className="nv">$0</span>
              &#x000A;
            </code>
          </pre>
        </div>
        <p>
          It works in <code>bash</code> and <code>zsh</code>, but not in{" "}
          <code>fish</code>. Here&rsquo;s a trick I use that should work in all
          shells. Type any bogus command that you know doesn&rsquo;t exist, for
          example:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>monfresh&#x000A;</code>
          </pre>
        </div>
        <p>
          The first word in the error message should be the name of the shell.
          In bash, you would see this:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              bash: monfresh: <span className="nb">command </span>not
              found&#x000A;
            </code>
          </pre>
        </div>
        <p>In zsh:</p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              zsh: monfresh: <span className="nb">command </span>not
              found&#x000A;
            </code>
          </pre>
        </div>
        <p>And in fish:</p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              fish: Unknown <span className="nb">command</span>:
              monfresh&#x000A;
            </code>
          </pre>
        </div>
        <h2 id="changing-shells">Changing shells</h2>

        <p>
          If you want to switch between shells to explore the differences, or
          because you know you want one or the other, use these commands:
        </p>

        <h3 id="switch-to-bash">Switch to bash</h3>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              chsh <span className="nt">-s</span> <span className="si">$(</span>
              which bash<span className="si">)</span>&#x000A;
            </code>
          </pre>
        </div>
        <h3 id="switch-to-zsh">Switch to zsh</h3>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              chsh <span className="nt">-s</span> <span className="si">$(</span>
              which zsh<span className="si">)</span>&#x000A;
            </code>
          </pre>
        </div>
        <blockquote>
          <p>
            What the <code>$()</code> syntax does is it runs what&rsquo;s inside
            the parentheses (such as
            <code>which bash</code>), saves the output, and passes it to{" "}
            <code>chsh -s</code>. This is convenient when you don&rsquo;t know
            the exact path to the <code>bash</code> or <code>zsh</code> command.
          </p>
        </blockquote>

        <p>
          This will prompt you for your macOS password. For the change to take
          effect, you need to open a new terminal tab, or quit and restart your
          terminal app.
        </p>

        <h3 id="important-note">Important Note</h3>

        <p>
          When you switch shells, if you expect to have the same configuration,
          make sure to copy the contents of
          <code>~/.bash_profile</code> into <code>~/.zshrc</code> or vice versa.
          Also look out for any code that is not compatible with both shells.
        </p>

        <p>
          If you&rsquo;re not sure how to open and edit dotfiles, or hidden
          files (those with filenames that start with a period, like{" "}
          <code>.zshrc</code>), read my{" "}
          <a href="/5-ways-to-open-hidden-files-on-your-mac/">
            guide on opening hidden files on your Mac
          </a>
          .
        </p>

        <h4 id="possible-error-scenario">Possible error scenario</h4>

        <p>
          If you get a message about a <code>non-standard shell</code>, that
          means that your shell is not listed in
          <code>/etc/shells</code>. This can happen after installing a shell
          with Homebrew, which is a reasonable thing to do because you can get a
          newer version than the one that came with macOS.
        </p>

        <p>
          To make macOS aware of the Homebrew version of a shell, it needs to be
          added to <code>/etc/shells</code>. Here&rsquo;s how you would safely
          add Homebrew&rsquo;s <code>zsh</code>:
        </p>

        <p>
          Find the path of the Homebrew <code>zsh</code>:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>which zsh&#x000A;</code>
          </pre>
        </div>
        <p>
          Open <code>/etc/shells</code> in Sublime Text, or another code editor,
          but not TextEdit:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              open /etc/shells <span className="nt">-a</span>{" "}
              <span className="s2">"Sublime Text"</span>&#x000A;
            </code>
          </pre>
        </div>
        <p>
          Copy and paste the output of <code>which zsh</code> at the bottom of{" "}
          <code>/etc/shells</code> and save the file. This will prompt you for
          your macOS password. Run the <code>chsh -s</code> command again, and
          this time it should not complain. Remember to open a new tab to see
          the new shell.
        </p>

        <h2 id="alternative">Alternative</h2>

        <p>
          Another way to change shells is via the Terminal app preferences, by
          selecting the &ldquo;Command (complete path)&rdquo; radio button in
          the &ldquo;Shells open with:&rdquo; section as shown in the screenshot
          below:
        </p>

        <p>
          Note that this does not change your default login shell, which you can
          check by running
          <code>echo $SHELL</code>. You can test this by following these steps:
        </p>

        <p>
          Set your login shell to <code>zsh</code>:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              chsh <span className="nt">-s</span> <span className="si">$(</span>
              which zsh<span className="si">)</span>&#x000A;
            </code>
          </pre>
        </div>
        <p>
          At the top of your <code>~/.zshrc</code>, add this line:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              <span className="nb">echo</span>{" "}
              <span className="s2">"hello from zsh"</span>&#x000A;
            </code>
          </pre>
        </div>
        <p>
          At the top of your <code>~/.bash_profile</code>, add this line:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              <span className="nb">echo</span>{" "}
              <span className="s2">"hello from bash"</span>&#x000A;
            </code>
          </pre>
        </div>
        <p>
          If the file doesn&rsquo;t exist, you can create it with{" "}
          <code>touch</code>:
        </p>
        <div className="highlight">
          <pre className="highlight shell">
            <code>
              <span className="nb">touch</span> ~/.bash_profile&#x000A;
            </code>
          </pre>
        </div>
        <p>
          Update your Terminal preferences to open the shell with the command{" "}
          <code>/bin/bash</code>, as shown in the screenshot above.
        </p>

        <p>Quit and restart Terminal.</p>

        <p>
          You should see &ldquo;hello from bash&rdquo;, but if you run{" "}
          <code>echo $SHELL</code>, you will see
          <code>/bin/zsh</code>.
        </p>

        <p>
          I&rsquo;m not sure if this affects anything while developing locally,
          so I would stick to the default settings and use <code>chsh -s</code>{" "}
          to switch shells.
        </p>

        <p>
          If you&rsquo;re not sure how to open and edit dotfiles, or hidden
          files (those with filenames that start with a period, like{" "}
          <code>.zshrc</code>), read my{" "}
          <a href="/5-ways-to-open-hidden-files-on-your-mac/">
            guide on opening hidden files on your Mac
          </a>
          .
        </p>

        <footer>
          Want more free guides like this?{" "}
          <a href="/newsletter/">Join 2700+ others</a> who are saving time with
          every issue. Follow me on
          <a href="https://twitter.com/monfresh">Twitter</a>
          for more development and automation tips.
        </footer>
      </article>
    </section>
  );
}

export default moncef;
