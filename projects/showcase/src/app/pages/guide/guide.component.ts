import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="doc-page">
      <section class="doc-section">
        <header class="section-header">
          <h2>Usage Guide</h2>
          <p>Learn how to effectively use Slyfox UI components in your applications.</p>
        </header>

        <div class="doc-showcase">
          <div class="doc-demo">
            <h3>Basic Setup</h3>
            <p>Import the components you need in your modules:</p>
            <pre><code>import SlyfoxUiButtonComponent  from slyfox/ui</code></pre>

            <h3>Standalone Components</h3>
            <p>All components are standalone and can be imported directly:</p>
            <pre><code>
            </code></pre>
          </div>
        </div>
      </section>
    </div>
  `
})
export class GuideComponent {}
