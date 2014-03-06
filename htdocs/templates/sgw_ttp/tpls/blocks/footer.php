<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<!-- FOOTER -->
<footer id="t3-footer" class="wrap t3-footer">

	<!-- FOOT NAVIGATION -->
	<div class="container">
		<div class="row">
			<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 footer-info">
				<?php if ($this->countModules('footer-info')) : ?>
				<jdoc:include type="modules" name="<?php $this->_p('footer-info') ?>" style="T3xhtml" />
				<?php endif ?>
			</div>
			<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12 footer-links">
				<?php if ($this->countModules('footer-subcribe')) : ?>
				<jdoc:include type="modules" name="<?php $this->_p('footer-subcribe') ?>" style="T3xhtml" />
				<?php endif ?>

				<?php if ($this->checkSpotlight('footnav', 'footer-1, footer-2, footer-3, footer-4, footer-5, footer-6')) : ?>
				<?php $this->spotlight('footnav', 'footer-1, footer-2, footer-3, footer-4, footer-5, footer-6') ?>
				<?php endif ?>
			</div>
		</div>
	</div>
	<!-- //FOOT NAVIGATION -->

</footer>
<!-- //FOOTER -->