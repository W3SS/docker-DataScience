// default init cells for new notebooks
define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
      if (Jupyter.notebook.get_cells().length===1){
   //do your thing
        Jupyter.notebook.insert_cell_above('code', 0).set_text("import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport matplotlib as mpl\nimport seaborn as sns\nimport re");
      }
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});

// auto-save
define([
    'base/js/namespace',
    'base/js/events'
    ],
    function(IPython, events) {
        events.on("notebook_loaded.Notebook",
        	function () {
  				IPython.notebook.set_autosave_interval(3600000); //1H
			}
  		);
        //may include additional events.on() statements
    }
);
