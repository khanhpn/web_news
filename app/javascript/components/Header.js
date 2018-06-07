import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section id="header">
	    <div className="container">
		 <div className="row">
		   <div className="col-sm-12 col-xs-12">
		     <nav className="navbar navbar-default" role="navigation">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="index.html">SPORTSinfo</a>
		    </div>

		    <div className="collapse navbar-collapse" id="navbar-brand-centered">
		      <ul className="nav navbar-nav">
			    <li className="border_hover_1"><a className="active_1" href="index.html">HOME</a></li>
		        <li>
				 </li>
				 <li className="dropdown border_hover_1">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">TRENDING
                    <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                       <li><a href="blog.html">Fastest updates</a></li>
						<li><a href="blog.html">News by week</a></li>
						<li><a href="blog.html">News by month</a></li>
						<li><a href="blog.html">Sports by season</a></li>
						 <li><a href="blog.html">Latest sports</a></li>
						<li><a href="blog.html">Sports primary league</a></li>
						<li><a href="blog.html">Newest series</a></li>
						<li><a href="blog.html">Asia cup</a></li>
						 <li><a href="blog.html">Sports by season</a></li>
						 <li><a href="blog.html">Latest sports</a></li>
                    </ul>
                 </li>
				 <li className="border_hover_1"><a href="blog.html">BLOGS</a></li>
				 <li className="dropdown border_hover_1">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">UPDATES
                    <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">

						<li><a href="pages.html">News by month</a></li>
						<li><a href="pages.html">Sports by season</a></li>
						 <li><a href="pages.html">Latest sports</a></li>
						<li><a href="pages.html">Sports primary league</a></li>
                    </ul>
                 </li>
				 <li className="border_hover_1"><a href="features.html">FEATURES</a></li>
				 <li className="dropdown dropdown-large">
				<a href="#" className="dropdown-toggle" data-toggle="dropdown">MORE<b className="caret"></b></a>

				<ul className="dropdown-menu dropdown-menu-large row menu_1">
					<li className="col-sm-3">
						<ul>
							<li className="dropdown-header">Glyphicons</li>
							<li><a href="contact.html">Available glyphs</a></li>
							<li className="disabled"><a href="contact.html">How to use</a></li>
							<li><a href="contact.html">Examples</a></li>
							<li className="divider"></li>
							<li className="dropdown-header">Dropdowns</li>
							<li><a href="contact.html">Example</a></li>
							<li><a href="contact.html">Aligninment options</a></li>
							<li><a href="contact.html">Headers</a></li>
							<li><a href="contact.html">Disabled menu items</a></li>
						</ul>
					</li>
					<li className="col-sm-3">
						<ul>
							<li className="dropdown-header">Button groups</li>
							<li><a href="contact.html">Basic example</a></li>
							<li><a href="contact.html">Button toolbar</a></li>
							<li><a href="contact.html">Sizing</a></li>
							<li><a href="contact.html">Nesting</a></li>
							<li><a href="contact.html">Vertical variation</a></li>
							<li className="divider"></li>
							<li className="dropdown-header">Button dropdowns</li>
							<li><a href="contact.html">Single button dropdowns</a></li>
						</ul>
					</li>
					<li className="col-sm-3">
						<ul>
							<li className="dropdown-header">Input groups</li>
							<li><a href="contact.html">Basic example</a></li>
							<li><a href="contact.html">Sizing</a></li>
							<li><a href="contact.html">Checkboxes and radio addons</a></li>
							<li className="divider"></li>
							<li className="dropdown-header">Navs</li>
							<li><a href="contact.html">Tabs</a></li>
							<li><a href="contact.html">Pills</a></li>
							<li><a href="contact.html">Justified</a></li>
						</ul>
					</li>
					<li className="col-sm-3">
						<ul>
							<li className="dropdown-header">Navbar</li>
							<li><a href="contact.html">Default navbar</a></li>
							<li><a href="contact.html">Buttons</a></li>
							<li><a href="contact.html">Text</a></li>
							<li><a href="contact.html">Non-nav links</a></li>
							<li><a href="contact.html">Component alignment</a></li>
							<li><a href="contact.html">Fixed to top</a></li>
							<li><a href="contact.html">Fixed to bottom</a></li>
							<li><a href="contact.html">Static top</a></li>
							<li><a href="contact.html">Inverted navbar</a></li>
						</ul>
					</li>
				</ul>

			</li>

				 <li className="border_hover_1"><a href="contact.html">CONTACT</a></li>
				 <li className="dropdown dropdown-large">
				<a href="#" className="dropdown-toggle" data-toggle="dropdown">POPULAR<b className="caret"></b></a>

				<ul className="dropdown-menu dropdown-menu-large row menu_1">

					<li className="col-sm-4">
						<ul>
							<li className="dropdown-header">Button groups</li>
							<li><a href="blog.html">Basic example</a></li>
							<li><a href="blog.html">Button toolbar</a></li>
							<li><a href="blog.html">Sizing</a></li>
							<li><a href="blog.html">Nesting</a></li>
							<li><a href="blog.html">Vertical variation</a></li>
							<li className="divider"></li>
							<li className="dropdown-header">Button dropdowns</li>
							<li><a href="blog.html">Single button dropdowns</a></li>
						</ul>
					</li>
					<li className="col-sm-4">
						<ul>
							<li className="dropdown-header">Input groups</li>
							<li><a href="blog.html">Basic example</a></li>
							<li><a href="blog.html">Sizing</a></li>
							<li><a href="blog.html">Checkboxes and radio addons</a></li>
							<li className="divider"></li>
							<li className="dropdown-header">Navs</li>
							<li><a href="blog.html">Tabs</a></li>
							<li><a href="blog.html">Pills</a></li>
							<li><a href="blog.html">Justified</a></li>
						</ul>
					</li>
					<li className="col-sm-4">
						<ul>
							<li className="dropdown-header">Navbar</li>
							<li><a href="blog.html">Default navbar</a></li>
							<li><a href="blog.html">Buttons</a></li>
							<li><a href="blog.html">Text</a></li>
							<li><a href="blog.html">Non-nav links</a></li>
							<li><a href="blog.html">Component alignment</a></li>
							<li><a href="blog.html">Fixed to top</a></li>
							<li><a href="blog.html">Fixed to bottom</a></li>
							<li><a href="blog.html">Static top</a></li>
							<li><a href="blog.html">Inverted navbar</a></li>
						</ul>
					</li>
				</ul>

			</li>
			     <li className="border_hover_1"><a href="pages.html">TYPOGRAPHY</a></li>
		      </ul>
		    </div>
		</nav>
		   </div>
		 </div>
		</div>
</section>
    )
  }
}
