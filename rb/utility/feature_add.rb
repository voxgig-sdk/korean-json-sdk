# KoreanJson SDK utility: feature_add
module KoreanJsonUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
