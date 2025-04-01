import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="doc-page">
      <section class="doc-section">
        <header class="section-header">
          <h2>Getting Started</h2>
          <p>Welcome to Slyfox UI Component Library</p>
        </header>

        <div class="doc-showcase">
          <div class="doc-demo">
            <h3>Installation</h3>
            <p>First, install the package:</p>
            <pre><code>npm install slyfox-ui</code></pre>

            <h3>Usage</h3>
            <p>Import the components in your standalone components:</p>
            <pre><code>import  SlyfoxUiButtonComponent  from '&#64;slyfox/ui';</code></pre>

            <h3>Example</h3>
            <p>Basic usage of a button component:</p>
            <pre><code>&lt;slf-ui-button
  Text="Click me"
  Color="primary"
  Size="md"
/&gt;</code></pre>
          </div>
        </div>
      </section>
    </div>
  `
})
export class GettingStartedComponent {}
