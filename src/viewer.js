$(document).ready(function () {
  const canvas = $(".js-canvas");
  const loadingOverlay = $(".js-loading-overlay");
  const playButtonOverlay = $(".js-play-button-overlay");
  const playButton = $(".js-play-button");
  const errorDisplay = $(".js-error-display");
  const modelSelector = $(".js-model-selector");

  const createModelStateProxy = () => {
    const state = {
      loading: false,
      loaded: false,
      error: null,
    };

    return new Proxy(state, {
      set: function (target, property, value) {
        target[property] = value;

        if (property === "loading") {
          if (value) {
            showLoadingOverlay();
            hidePlayButtonOverlay();
          } else {
            hideLoadingOverlay();
          }
        }

        if (property === "loaded") {
          if (value) {
            hideLoadingOverlay();
            hidePlayButtonOverlay();
          } else {
            showPlayButtonOverlay();
          }
        }

        if (property === "error") {
          if (value) {
            setError(value);
          }
        }

        return true;
      },
    });
  };

  const modelState = createModelStateProxy();

  function showLoadingOverlay() {
    loadingOverlay.show();
  }

  function hideLoadingOverlay() {
    loadingOverlay.hide();
  }

  function showPlayButtonOverlay() {
    playButtonOverlay.show();
  }

  function hidePlayButtonOverlay() {
    playButtonOverlay.hide();
  }

  function setError(message) {
    if (message) {
      errorDisplay.addClass("alert", "alert-danger");
      errorDisplay.find(".error-text").text(message);
    } else {
      errorDisplay.removeClass("alert", "alert-danger");
    }
  }

  async function loadModel() {
    modelState.loaded = false;
    modelState.loading = true;
    // init three
    // load model
    modelState.loading = false;
    modelState.loaded = true;
  }

  function attachOptions() {
    const options = [
      "3D_surface_reconstruction_bitis_dentition.stl",
      "Cube_3d_printing_sample.stl",
      "Eiffel_tower_sample.STL",
      "Flamingo.glb",
      "GeoB8502_825cm_Shell-6.obj",
      "leaf_09.las",
      "Menger_sponge_sample.stl",
      "NF66_body_resize_v2.ply",
      "Parrot.glb",
      "Stanford_Bunny_sample.stl",
      "Stork.glb"
    ];

    options.forEach((option) => {
      const $option = $(`<option value="${option}">${option}</option>`);
      modelSelector.append($option);
    });
  }

  function initUi() {
    loadingOverlay.hide();
    playButtonOverlay.show();
    errorDisplay.hide();
    modelSelector.on("change", loadModel);
    playButton.on("click", loadModel);
    attachOptions();
  }

  initUi();

  $(window).on("beforeunload", () => {
    modelSelector.off("change", loadModel);
    playButton.off("click", loadModel);
  });
});
